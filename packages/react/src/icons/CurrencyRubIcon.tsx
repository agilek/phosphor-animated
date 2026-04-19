import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><path d="M88,216V40h60a52,52,0,0,1,0,104H56" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><path d="M88,216V40h60a52,52,0,0,1,0,104H56" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><path d="M88,216V40h60a52,52,0,0,1,0,104H56" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M88,216V40h60a52,52,0,0,1,0,104H56" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M168,104a24,24,0,0,1-24,24H112V80h32A24,24,0,0,1,168,104Zm64,24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-48-24a40,40,0,0,0-40-40H104a8,8,0,0,0-8,8v56H88a8,8,0,0,0,0,16h8v16H88a8,8,0,0,0,0,16h8v16a8,8,0,0,0,16,0V176h40a8,8,0,0,0,0-16H112V144h32A40,40,0,0,0,184,104Z" fill="currentColor"/></>,
  duotone: <><path d="M88,40h60a52,52,0,0,1,0,104H88Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M88,216V40h60a52,52,0,0,1,0,104H56" strokeWidth="16" className="draw-line"/></>,
};

export const CurrencyRubIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
