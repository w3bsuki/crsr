'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface Feature3DProps {
  type: 'processing' | 'neural' | 'quantum';
  color?: string;
}

export function FeatureCanvas({ type }: Feature3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 6;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    // Feature-specific setup
    let geometry: THREE.BufferGeometry;
    let material: THREE.Material;
    let mesh: THREE.Mesh | THREE.Points;

    switch (type) {
      case 'processing':
        geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
        material = new THREE.MeshPhongMaterial({
          color: 0x00ff88,
          wireframe: true,
          transparent: true,
          opacity: 0.3
        });
        mesh = new THREE.Mesh(geometry, material);
        break;

      case 'neural':
        geometry = new THREE.SphereGeometry(0.05, 16, 16);
        material = new THREE.MeshPhongMaterial({ color: 0x4488ff });
        mesh = new THREE.Mesh(geometry, material);
        const group = new THREE.Group();
        for (let i = 0; i < 50; i++) {
          const clone = mesh.clone();
          clone.position.set(
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4
          );
          group.add(clone);
        }
        mesh = group;
        break;

      case 'quantum':
        geometry = new THREE.IcosahedronGeometry(0.5, 1);
        material = new THREE.MeshPhongMaterial({
          color: 0xff4488,
          wireframe: true,
          transparent: true,
          opacity: 0.5
        });
        mesh = new THREE.Mesh(geometry, material);
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(2, 0.02, 16, 100),
          new THREE.MeshPhongMaterial({ color: 0xff4488 })
        );
        mesh.add(ring);
        break;
    }

    scene.add(mesh);

    // Animation
    function animate() {
      requestAnimationFrame(animate);
      if (mesh) {
        mesh.rotation.x += 0.001;
        mesh.rotation.y += 0.002;
      }
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [type]);

  return <div ref={containerRef} className="w-full h-full min-h-[300px]" />;
}

export default FeatureCanvas;