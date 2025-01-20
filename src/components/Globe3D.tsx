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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const [locations] = useState<Location[]>([
    {
      lat: 19.0760,
      lng: 72.8777,
      city: "Mumbai",
      country: "India",
      size: 1.5,
      color: "#68D391", 
      clients: 150,
      projects: 200
    },
    {
      lat: 40.7128,
      lng: -74.0060,
      city: "New York",
      country: "USA",
      size: 1.4,
      color: "#63B3ED", 
      clients: 120,
      projects: 180
    },
    {
      lat: 51.5074,
      lng: -0.1278,
      city: "London",
      country: "UK",
      size: 1.3,
      color: "#B794F4", 
      clients: 100,
      projects: 150
    },
    {
      lat: 35.6762,
      lng: 139.6503,
      city: "Tokyo",
      country: "Japan",
      size: 1.2,
      color: "#68D391", 
      clients: 80,
      projects: 120
    },
    {
      lat: 1.3521,
      lng: 103.8198,
      city: "Singapore",
      country: "Singapore",
      size: 1.1,
      color: "#63B3ED", 
      clients: 60,
      projects: 90
    }
  ]);



  const INITIAL_ANIMATION_DURATION = 2000;
  const POINT_ANIMATION_DURATION = 1000;

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom = true;
      controls.enablePan = true;
      controls.minDistance = 200;
      controls.maxDistance = 800;

      const altitude = window.innerWidth < 768 ? 1.8 : 2.5;
      globeEl.current.pointOfView({
        lat: 20,
        lng: 0,
        altitude: altitude
      }, INITIAL_ANIMATION_DURATION);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ 
          width: Math.min(width, window.innerWidth),
          height: Math.min(height, window.innerHeight * 0.7)
        });
        
        if (globeEl.current) {
          const altitude = window.innerWidth < 768 ? 1.8 : 2.5;
          globeEl.current.pointOfView({
            lat: globeEl.current.pointOfView().lat,
            lng: globeEl.current.pointOfView().lng,
            altitude: altitude
          }, 0);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePointClick = (point: object) => {
    const location = point as Location;
    setSelectedLocation(location);
    
    if (globeEl.current) {
      globeEl.current.pointOfView({
        lat: location.lat,
        lng: location.lng,
        altitude: 1.5
      }, POINT_ANIMATION_DURATION);

      const controls = globeEl.current.controls();
      controls.autoRotate = false;
      
      setTimeout(() => {
        if (globeEl.current) {
          globeEl.current.controls().autoRotate = true;
        }
      }, 10000);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[350px] md:min-h-[450px] lg:min-h-[550px] max-h-[800px]">
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
        pointsMerge={false}
        pointResolution={32}
        onPointClick={handlePointClick}
        atmosphereColor="#63B3ED"
        atmosphereAltitude={0.15}
        pointLabel={d => `
          <div class="bg-gray-900/90 p-3 rounded-lg shadow-lg backdrop-blur-sm border border-${(d as Location).color === '#68D391' ? 'green' : (d as Location).color === '#63B3ED' ? 'blue' : 'purple'}-500/20">
            <div class="font-bold text-${(d as Location).color === '#68D391' ? 'green-400' : (d as Location).color === '#63B3ED' ? 'blue-400' : 'purple-400'} text-lg mb-2">${(d as Location).city}, ${(d as Location).country}</div>
            <div class="text-white flex items-center gap-2">
              <svg class="w-4 h-4 text-${(d as Location).color === '#68D391' ? 'green-400' : (d as Location).color === '#63B3ED' ? 'blue-400' : 'purple-400'}" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
              <span class="font-semibold text-${(d as Location).color === '#68D391' ? 'green-300' : (d as Location).color === '#63B3ED' ? 'blue-300' : 'purple-300'}">${(d as Location).clients}+</span> Clients
            </div>
            <div class="text-white flex items-center gap-2">
              <svg class="w-4 h-4 text-${(d as Location).color === '#68D391' ? 'green-400' : (d as Location).color === '#63B3ED' ? 'blue-400' : 'purple-400'}" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
              </svg>
              <span class="font-semibold text-${(d as Location).color === '#68D391' ? 'green-300' : (d as Location).color === '#63B3ED' ? 'blue-300' : 'purple-300'}">${(d as Location).projects}+</span> Projects
            </div>
          </div>
        `}
      />
      
      {/* Location Details Panel */}
      {selectedLocation && (
        <div className="absolute top-4 right-4 bg-gray-900/90 p-4 md:p-6 rounded-xl backdrop-blur-sm border border-${selectedLocation.color === '#68D391' ? 'green' : selectedLocation.color === '#63B3ED' ? 'blue' : 'purple'}-500/20 w-[90%] sm:w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg md:text-xl font-bold text-${selectedLocation.color === '#68D391' ? 'green' : selectedLocation.color === '#63B3ED' ? 'blue' : 'purple'}-400">{selectedLocation.city}</h3>
            <button
              onClick={() => setSelectedLocation(null)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-${selectedLocation.color === '#68D391' ? 'green' : selectedLocation.color === '#63B3ED' ? 'blue' : 'purple'}-500/10 rounded-lg">
                <svg className="w-6 h-6 text-${selectedLocation.color === '#68D391' ? 'green' : selectedLocation.color === '#63B3ED' ? 'blue' : 'purple'}-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Active Clients</div>
                <div className="text-xl font-bold text-${selectedLocation.color === '#68D391' ? 'green' : selectedLocation.color === '#63B3ED' ? 'blue' : 'purple'}-300">{selectedLocation.clients}+</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-${selectedLocation.color === '#68D391' ? 'green' : selectedLocation.color === '#63B3ED' ? 'blue' : 'purple'}-500/10 rounded-lg">
                <svg className="w-6 h-6 text-${selectedLocation.color === '#68D391' ? 'green' : selectedLocation.color === '#63B3ED' ? 'blue' : 'purple'}-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-400">Total Projects</div>
                <div className="text-xl font-bold text-${selectedLocation.color === '#68D391' ? 'green' : selectedLocation.color === '#63B3ED' ? 'blue' : 'purple'}-300">{selectedLocation.projects}+</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Globe3D;
