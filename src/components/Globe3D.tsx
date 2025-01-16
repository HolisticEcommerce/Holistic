'use client';

import React, { useEffect, useRef, useState } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';

interface Location {
  lat: number;
  lng: number;
  city: string;
  country: string;
  size: number;
  color: string;
  clients: number;
  projects: number;
}

const Globe3D: React.FC = () => {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'details'>('overview');
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  const [locations] = useState<Location[]>([
    {
      lat: 19.0760,
      lng: 72.8777,
      city: "Mumbai",
      country: "India",
      size: 1.2,
      color: "#4FD1C5",
      clients: 150,
      projects: 200
    },
    {
      lat: 40.7128,
      lng: -74.0060,
      city: "New York",
      country: "USA",
      size: 1.1,
      color: "#4FD1C5",
      clients: 120,
      projects: 180
    },
    {
      lat: 51.5074,
      lng: -0.1278,
      city: "London",
      country: "UK",
      size: 1.0,
      color: "#4FD1C5",
      clients: 100,
      projects: 150
    },
    {
      lat: 35.6762,
      lng: 139.6503,
      city: "Tokyo",
      country: "Japan",
      size: 1.0,
      color: "#4FD1C5",
      clients: 80,
      projects: 120
    },
    {
      lat: 1.3521,
      lng: 103.8198,
      city: "Singapore",
      country: "Singapore",
      size: 0.9,
      color: "#4FD1C5",
      clients: 60,
      projects: 90
    }
  ]);

  const totalClients = locations.reduce((sum, loc) => sum + loc.clients, 0);
  const totalProjects = locations.reduce((sum, loc) => sum + loc.projects, 0);
  const averageProjectsPerClient = (totalProjects / totalClients).toFixed(1);
  const topClientCity = [...locations].sort((a, b) => b.clients - a.clients)[0];
  const topProjectCity = [...locations].sort((a, b) => b.projects - a.projects)[0];

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.pointOfView({
        lat: 20,
        lng: 0,
        altitude: 2.5
      }, 1000);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePointClick = (point: object, ) => {
    setSelectedLocation(point as Location);
    setActiveTab('details');
    if (globeEl.current) {
      globeEl.current.pointOfView({
        lat: (point as Location).lat,
        lng: (point as Location).lng,
        altitude: 1.5
      }, 1000);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={locations}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0.1}
        pointRadius="size"
        pointsMerge={true}
        onPointClick={handlePointClick}
        pointLabel={d => `
          <div class="bg-gray-900/90 p-3 rounded-lg shadow-lg backdrop-blur-sm border border-cyan-500/20">
            <div class="font-bold text-cyan-400 text-lg mb-2">${(d as Location).city}, ${(d as Location).country}</div>
            <div class="text-white flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
              Clients: ${(d as Location).clients}+
            </div>
            <div class="text-white flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
              </svg>
              Projects: ${(d as Location).projects}+
            </div>
          </div>
        `}
        atmosphereColor="#4FD1C5"
        atmosphereAltitude={0.1}
      />
      
      {/* Interactive Stats Panel */}
      <div className="absolute top-4 right-4 bg-gray-900/90 p-4 md:p-6 rounded-xl backdrop-blur-sm border border-cyan-500/20 w-[90%] sm:w-80 max-h-[90vh] overflow-y-auto">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 px-3 md:px-4 text-sm md:text-base rounded-lg transition-all ${
              activeTab === 'overview'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`flex-1 py-2 px-3 md:px-4 text-sm md:text-base rounded-lg transition-all ${
              activeTab === 'details'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Details
          </button>
        </div>

        {activeTab === 'overview' ? (
          <div className="space-y-3 md:space-y-4">
            <div
              className="p-3 md:p-4 rounded-lg bg-gray-800/50 border border-cyan-500/20 transition-all hover:bg-gray-800 cursor-pointer hover:scale-[1.02] duration-200"
              onMouseEnter={() => setHoveredStat('clients')}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-cyan-400 text-sm md:text-base">Global Clients</h4>
                <span className="text-xl md:text-2xl font-bold text-white">{totalClients}+</span>
              </div>
              {hoveredStat === 'clients' && (
                <div className="mt-2 text-xs md:text-sm text-gray-300">
                  Highest concentration in {topClientCity.city} with {topClientCity.clients}+ clients
                </div>
              )}
            </div>

            <div
              className="p-3 md:p-4 rounded-lg bg-gray-800/50 border border-cyan-500/20 transition-all hover:bg-gray-800 cursor-pointer hover:scale-[1.02] duration-200"
              onMouseEnter={() => setHoveredStat('projects')}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-cyan-400 text-sm md:text-base">Total Projects</h4>
                <span className="text-xl md:text-2xl font-bold text-white">{totalProjects}+</span>
              </div>
              {hoveredStat === 'projects' && (
                <div className="mt-2 text-xs md:text-sm text-gray-300">
                  Most active in {topProjectCity.city} with {topProjectCity.projects}+ projects
                </div>
              )}
            </div>

            <div
              className="p-3 md:p-4 rounded-lg bg-gray-800/50 border border-cyan-500/20 transition-all hover:bg-gray-800 cursor-pointer hover:scale-[1.02] duration-200"
              onMouseEnter={() => setHoveredStat('ratio')}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-cyan-400 text-sm md:text-base">Projects per Client</h4>
                <span className="text-xl md:text-2xl font-bold text-white">{averageProjectsPerClient}</span>
              </div>
              {hoveredStat === 'ratio' && (
                <div className="mt-2 text-xs md:text-sm text-gray-300">
                  Average number of projects handled per client globally
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {selectedLocation ? (
              <>
                <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-4">
                  {selectedLocation.city}, {selectedLocation.country}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg hover:scale-[1.02] duration-200">
                    <span className="text-gray-300 text-sm md:text-base">Active Clients</span>
                    <span className="text-lg md:text-xl font-bold text-white">{selectedLocation.clients}+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg hover:scale-[1.02] duration-200">
                    <span className="text-gray-300 text-sm md:text-base">Total Projects</span>
                    <span className="text-lg md:text-xl font-bold text-white">{selectedLocation.projects}+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg hover:scale-[1.02] duration-200">
                    <span className="text-gray-300 text-sm md:text-base">Projects per Client</span>
                    <span className="text-lg md:text-xl font-bold text-white">
                      {(selectedLocation.projects / selectedLocation.clients).toFixed(1)}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-gray-400 text-center py-8 text-sm md:text-base">
                Click on any location marker to view detailed statistics
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Globe3D;
