import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <></>,
  light: <></>,
  regular: <></>,
  bold: <></>,
  fill: <></>,
  duotone: <></>,
};

export const DotsThreeVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
