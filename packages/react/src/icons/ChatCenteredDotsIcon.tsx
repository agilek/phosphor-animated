import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="120" r="8" fill="currentColor"/><circle cx="84" cy="120" r="8" fill="currentColor"/><circle cx="172" cy="120" r="8" fill="currentColor"/><path d="M105.07,192l16,28a8,8,0,0,0,13.9,0l16-28H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8Z" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="120" r="10" fill="currentColor"/><circle cx="84" cy="120" r="10" fill="currentColor"/><circle cx="172" cy="120" r="10" fill="currentColor"/><path d="M105.07,192l16,28a8,8,0,0,0,13.9,0l16-28H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8Z" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="120" r="12" fill="currentColor"/><circle cx="84" cy="120" r="12" fill="currentColor"/><circle cx="172" cy="120" r="12" fill="currentColor"/><path d="M105.07,192l16,28a8,8,0,0,0,13.9,0l16-28H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8Z" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="104" cy="120" r="16" fill="currentColor"/><circle cx="152" cy="120" r="16" fill="currentColor"/><path d="M105.07,192l16,28a8,8,0,0,0,13.9,0l16-28H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8Z" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM84,132a12,12,0,1,1,12-12A12,12,0,0,1,84,132Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,132Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,132Z" fill="currentColor"/></>,
  duotone: <><path d="M105.07,192l16,28a8,8,0,0,0,13.9,0l16-28H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="120" r="12" fill="currentColor"/><circle cx="84" cy="120" r="12" fill="currentColor"/><circle cx="172" cy="120" r="12" fill="currentColor"/><path d="M105.07,192l16,28a8,8,0,0,0,13.9,0l16-28H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8Z" strokeWidth="16" className="draw-line"/></>,
};

export const ChatCenteredDotsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
