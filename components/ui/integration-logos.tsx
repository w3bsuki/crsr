"use client";

import { memo } from "react";

interface LogoProps {
  className?: string;
}

export const AWSLogo = memo(function AWSLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M15.93 12.803L11.562 14.834L15.93 16.864L20.298 14.834L15.93 12.803Z" fill="#FF9900"/>
      <path d="M10.562 15.834V19.895L14.93 21.926V17.864L10.562 15.834Z" fill="#FF9900"/>
      <path d="M15.93 17.864V21.926L20.298 19.895V15.834L15.93 17.864Z" fill="#FF9900"/>
      <path d="M15.93 10.137L9.562 13.168L15.93 16.198L22.298 13.168L15.93 10.137Z" fill="#FF9900"/>
      <path d="M8.562 14.168V20.229L14.93 23.259V17.198L8.562 14.168Z" fill="#FF9900"/>
      <path d="M15.93 17.198V23.259L22.298 20.229V14.168L15.93 17.198Z" fill="#FF9900"/>
    </svg>
  );
});

export const GCPLogo = memo(function GCPLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M8.562 10.137L15.93 7.107L23.298 10.137L15.93 13.168L8.562 10.137Z" fill="#4285F4"/>
      <path d="M7.562 11.137V17.198L13.93 20.229V14.168L7.562 11.137Z" fill="#34A853"/>
      <path d="M15.93 14.168V20.229L22.298 17.198V11.137L15.93 14.168Z" fill="#EA4335"/>
    </svg>
  );
});

export const AzureLogo = memo(function AzureLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M18.5 7L24.5 22H16.5L10.5 7H18.5Z" fill="#0078D4"/>
      <path d="M7.5 25L13.5 10L19.5 25H7.5Z" fill="#0078D4"/>
    </svg>
  );
});

export const TensorFlowLogo = memo(function TensorFlowLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 6L26 12V24L16 30L6 24V12L16 6Z" fill="#FF6F00"/>
      <path d="M16 6V18L26 24V12L16 6Z" fill="#FF9900"/>
    </svg>
  );
});

export const PyTorchLogo = memo(function PyTorchLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 7C21.523 7 26 11.477 26 17C26 22.523 21.523 27 16 27C10.477 27 6 22.523 6 17C6 11.477 10.477 7 16 7Z" fill="#EE4C2C"/>
      <circle cx="21" cy="11" r="2" fill="white"/>
    </svg>
  );
});

export const DockerLogo = memo(function DockerLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M18 8H22V12H18V8Z" fill="#2496ED"/>
      <path d="M13 8H17V12H13V8Z" fill="#2496ED"/>
      <path d="M8 13H12V17H8V13Z" fill="#2496ED"/>
      <path d="M13 13H17V17H13V13Z" fill="#2496ED"/>
      <path d="M18 13H22V17H18V13Z" fill="#2496ED"/>
      <path d="M23 13H27V17H23V13Z" fill="#2496ED"/>
      <path d="M8 18C12.418 18 16 14.418 16 10C16 14.418 19.582 18 24 18C19.582 18 16 21.582 16 26C16 21.582 12.418 18 8 18Z" fill="#2496ED"/>
    </svg>
  );
});

export const KubernetesLogo = memo(function KubernetesLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 6L26 11V21L16 26L6 21V11L16 6Z" fill="#326CE5"/>
      <path d="M16 10C18.2091 10 20 11.7909 20 14C20 16.2091 18.2091 18 16 18C13.7909 18 12 16.2091 12 14C12 11.7909 13.7909 10 16 10Z" fill="white"/>
    </svg>
  );
});

export const MongoDBLogo = memo(function MongoDBLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 6C18.1217 6 20.1566 6.84285 21.6569 8.34315C23.1571 9.84344 24 11.8783 24 14C24 18.4183 16 26 16 26C16 26 8 18.4183 8 14C8 11.8783 8.84285 9.84344 10.3431 8.34315C11.8434 6.84285 13.8783 6 16 6Z" fill="#13AA52"/>
    </svg>
  );
}); 