import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LiTag({ icon, title }: { icon: IconProp; title: string }) {
  return (
    <li>
      <FontAwesomeIcon icon={icon} className="text-teal-600" /> {title}
    </li>
  );
}
