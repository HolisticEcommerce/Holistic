'use client';

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';

interface MarkerData {
  lat: number;
  lng: number;
  city: string;
  region: string;
  clients: number;
  projects: number;
  satisfaction: number;
  color?: string;
  size: number;
}

type GlobePoint = Partial<MarkerData> | null;

const GlobeComponent = () => {
  const globeEl = useRef<GlobeMethods>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hoverData, setHoverData] = useState<MarkerData | null>(null);

  const handlePointHover = useCallback((point: GlobePoint) => {
    setHoverData(point as MarkerData | null);
  }, []);

  const markers: MarkerData[] = useMemo(() => [
    { 
      lat: 40.7128,
      lng: -74.0060,
      city: "New York",
      region: "North America",
      clients: 150,
      projects: 200,
      satisfaction: 98,
      color: "#4FD1C5",
      size: 1.2
    },
    {
      lat: 51.5074,
      lng: -0.1278,
      city: "London",
      region: "Europe",
      clients: 120,
      projects: 180,
      satisfaction: 97,
      color: "#38B2AC",
      size: 1.1
    },
    {
      lat: 35.6762,
      lng: 139.6503,
      city: "Tokyo",
      region: "Asia",
      clients: 100,
      projects: 150,
      satisfaction: 99,
      color: "#319795",
      size: 1.0
    }
  ], []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        const isMobileView = width < 768;
        setDimensions({
          width: width,
          height: isMobileView ? 400 : 500
        });

        const globe = globeEl.current;
        if (globe) {
          const controls = globe.controls();
          if (controls) {
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.7;
            controls.enableZoom = false;
          }
          
          globe.pointOfView({
            lat: 25,
            lng: 0,
            altitude: isMobileView ? 3 : 2.5
          });
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="/globe.svg"
        backgroundColor="rgba(0,0,0,0)"
        pointsData={markers}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0.01}
        pointRadius="size"
        pointsMerge={true}
        pointsTransitionDuration={1000}
        onPointHover={handlePointHover}
        htmlElementsData={markers}
        htmlElement={(d: object) => {
          const markerData = d as MarkerData;
          const el = document.createElement('div');
          el.style.color = markerData.color || '#fff';
          el.style.fontSize = '12px';
          el.textContent = markerData.city;
          return el;
        }}
        htmlLat="lat"
        htmlLng="lng"
        htmlAltitude={0.1}
      />
      
      {/* Hover Info */}
      {hoverData && (
        <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm p-3 rounded-lg border border-gray-800">
          <div className="text-white font-semibold">{hoverData.city}</div>
          <div className="text-sm text-gray-300">{hoverData.region}</div>
          <div className="mt-2 space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-400">Clients:</span>
              <span className="text-cyan-400 font-semibold">{hoverData.clients}+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Projects:</span>
              <span className="text-teal-400 font-semibold">{hoverData.projects}+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Satisfaction:</span>
              <span className="text-emerald-400 font-semibold">{hoverData.satisfaction}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobeComponent;
