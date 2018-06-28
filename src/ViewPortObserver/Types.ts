import * as React from 'react';

export interface Dimensions {
  width: number;
  height: number;
}

export type ViewPortType = 'mobile' | 'desktop';

export interface ViewPort {
  dimensions: Dimensions;
  type: ViewPortType;
}

export const windowDimensions = (window: Window): Dimensions => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export const viewportType = (dimensions: Dimensions): ViewPortType =>
  dimensions.width < 480 ? 'mobile' : 'desktop';

export const viewPort = (dimensions: Dimensions): ViewPort => ({
  dimensions,
  type: viewportType(dimensions),
});

export const ViewPortContext = React.createContext<ViewPort>(
  viewPort({
    height: 768,
    width: 1024,
  }),
);
