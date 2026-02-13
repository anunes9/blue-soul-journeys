// Added React import to provide the React namespace for type definitions
import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  // Fix: Using React.ReactNode requires React to be imported in the file
  icon: React.ReactNode;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
}

export interface TrustElement {
  title: string;
  description: string;
  // Fix: Using React.ReactNode requires React to be imported in the file
  icon: React.ReactNode;
}