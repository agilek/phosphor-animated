import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" strokeWidth="8" className="draw-line"/><circle cx="128" cy="128" r="40" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" strokeWidth="12" className="draw-line"/><circle cx="128" cy="128" r="40" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="40" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" strokeWidth="24" className="draw-line"/><circle cx="128" cy="128" r="32" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" fill="currentColor"/></>,
  duotone: <><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2" fill="currentColor"/><path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="40" strokeWidth="16" className="draw-line"/></>,
};

export const EyeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
