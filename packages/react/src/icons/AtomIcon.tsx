import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><ellipse cx="128" cy="128" rx="44.13" ry="116.33" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="128" cy="128" rx="116.33" ry="44.13" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><ellipse cx="128" cy="128" rx="44.13" ry="116.33" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="128" cy="128" rx="116.33" ry="44.13" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><ellipse cx="128" cy="128" rx="44.13" ry="116.33" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="128" cy="128" rx="116.33" ry="44.13" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><ellipse cx="128" cy="128" rx="44.13" ry="116.33" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="128" cy="128" rx="116.33" ry="44.13" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><ellipse cx="128" cy="128" rx="44.13" ry="116.33" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="128" cy="128" rx="116.33" ry="44.13" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const AtomIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
