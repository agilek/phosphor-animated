import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M80,168V144a16,16,0,0,1,16-16h88a16,16,0,0,0,16-16V88" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><circle cx="80" cy="64" r="24" strokeWidth="8" className="draw-line"/><circle cx="200" cy="64" r="24" strokeWidth="8" className="draw-line"/><circle cx="80" cy="192" r="24" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M80,168V144a16,16,0,0,1,16-16h88a16,16,0,0,0,16-16V88" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><circle cx="80" cy="64" r="24" strokeWidth="12" className="draw-line"/><circle cx="200" cy="64" r="24" strokeWidth="12" className="draw-line"/><circle cx="80" cy="192" r="24" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M80,168V144a16,16,0,0,1,16-16h88a16,16,0,0,0,16-16V88" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><circle cx="80" cy="64" r="24" strokeWidth="16" className="draw-line"/><circle cx="200" cy="64" r="24" strokeWidth="16" className="draw-line"/><circle cx="80" cy="192" r="24" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M80,168V144a16,16,0,0,1,16-16h88a16,16,0,0,0,16-16V88" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><circle cx="80" cy="64" r="24" strokeWidth="24" className="draw-line"/><circle cx="200" cy="64" r="24" strokeWidth="24" className="draw-line"/><circle cx="80" cy="192" r="24" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192Z" fill="currentColor"/></>,
  duotone: <><circle cx="200" cy="64" r="24" opacity="0.2" fill="currentColor"/><path d="M80,168V144a16,16,0,0,1,16-16h88a16,16,0,0,0,16-16V88" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><circle cx="80" cy="64" r="24" strokeWidth="16" className="draw-line"/><circle cx="200" cy="64" r="24" strokeWidth="16" className="draw-line"/><circle cx="80" cy="192" r="24" strokeWidth="16" className="draw-line"/></>,
};

export const GitBranchIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
