import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="88 128 24 192 96 216 136 176" strokeWidth="8" className="draw-line"/><path d="M184,160l-26.34,26.34a8,8,0,0,1-11.32,0L77.66,117.66a8,8,0,0,1,0-11.32L104,80" strokeWidth="8" className="draw-line"/><path d="M248,112l-50.34,50.34a8,8,0,0,1-11.32,0L101.66,77.66a8,8,0,0,1,0-11.32L152,16" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="88 128 24 192 96 216 136 176" strokeWidth="12" className="draw-line"/><path d="M184,160l-26.34,26.34a8,8,0,0,1-11.32,0L77.66,117.66a8,8,0,0,1,0-11.32L104,80" strokeWidth="12" className="draw-line"/><path d="M248,112l-50.34,50.34a8,8,0,0,1-11.32,0L101.66,77.66a8,8,0,0,1,0-11.32L152,16" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="88 128 24 192 96 216 136 176" strokeWidth="16" className="draw-line"/><path d="M184,160l-26.34,26.34a8,8,0,0,1-11.32,0L77.66,117.66a8,8,0,0,1,0-11.32L104,80" strokeWidth="16" className="draw-line"/><path d="M248,112l-50.34,50.34a8,8,0,0,1-11.32,0L101.66,77.66a8,8,0,0,1,0-11.32L152,16" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="88 128 24 192 96 216 136 176" strokeWidth="24" className="draw-line"/><path d="M184,160l-26.34,26.34a8,8,0,0,1-11.32,0L77.66,117.66a8,8,0,0,1,0-11.32L104,80" strokeWidth="24" className="draw-line"/><path d="M244,116l-46.34,46.34a8,8,0,0,1-11.32,0L101.66,77.66a8,8,0,0,1,0-11.32L148,20" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M253.66,106.34a8,8,0,0,0-11.32,0L192,156.69,107.31,72l50.35-50.34a8,8,0,1,0-11.32-11.32L96,60.69A16,16,0,0,0,93.18,79.5L72,100.69a16,16,0,0,0,0,22.62L76.69,128,18.34,186.34a8,8,0,0,0,3.13,13.25l72,24A7.88,7.88,0,0,0,96,224a8,8,0,0,0,5.66-2.34L136,187.31l4.69,4.69a16,16,0,0,0,22.62,0l21.18-21.18A16,16,0,0,0,203.31,168l50.35-50.34A8,8,0,0,0,253.66,106.34ZM152,180.69,83.31,112,104,91.31,172.69,160Z" fill="currentColor"/></>,
  duotone: <><polygon points="88 128 24 192 96 216 136 176 88 128" opacity="0.2" fill="currentColor"/><polyline points="88 128 24 192 96 216 136 176" strokeWidth="16" className="draw-line"/><path d="M184,160l-26.34,26.34a8,8,0,0,1-11.32,0L77.66,117.66a8,8,0,0,1,0-11.32L104,80" strokeWidth="16" className="draw-line"/><path d="M248,112l-50.34,50.34a8,8,0,0,1-11.32,0L101.66,77.66a8,8,0,0,1,0-11.32L152,16" strokeWidth="16" className="draw-line"/></>,
};

export const HighlighterIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
