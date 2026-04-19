import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="16" y="56" width="224" height="144" rx="8" strokeWidth="8" className="draw-line"/><polyline points="56 152 56 104 88 136 120 104 120 152" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="200 128 176 152 152 128" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="16" y="56" width="224" height="144" rx="8" strokeWidth="12" className="draw-line"/><polyline points="56 152 56 104 88 136 120 104 120 152" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="200 128 176 152 152 128" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="16" y="56" width="224" height="144" rx="8" strokeWidth="16" className="draw-line"/><polyline points="56 152 56 104 88 136 120 104 120 152" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="200 128 176 152 152 128" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="16" y="56" width="224" height="144" rx="8" strokeWidth="24" className="draw-line"/><polyline points="60 148 60 108 88 136 116 108 116 148" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="196 132 176 148 156 132" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M232,48H24A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48ZM128,152a8,8,0,0,1-16,0V123.31L93.66,141.66a8,8,0,0,1-11.32,0L64,123.31V152a8,8,0,0,1-16,0V104a8,8,0,0,1,13.66-5.66L88,124.69l26.34-26.35A8,8,0,0,1,128,104Zm77.66-18.34-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L168,132.69V104a8,8,0,0,1,16,0v28.69l10.34-10.35a8,8,0,0,1,11.32,11.32Z" fill="currentColor"/></>,
  duotone: <><rect x="16" y="56" width="224" height="144" rx="8" opacity="0.2" fill="currentColor"/><rect x="16" y="56" width="224" height="144" rx="8" strokeWidth="16" className="draw-line"/><polyline points="56 152 56 104 88 136 120 104 120 152" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="200 128 176 152 152 128" strokeWidth="16" className="draw-line"/></>,
};

export const MarkdownLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
