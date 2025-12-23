
// Added React import to provide access to the React namespace for types
import React from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface TransformationItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
