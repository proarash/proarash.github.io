import { ReactNode } from 'react';
import { Badge } from '@/components/ui/badge';

export type SkillCardProps = {
	title: string;
	icon: ReactNode;
	progress: number;
};

const SkillCard = ({ props }: { props: SkillCardProps }) => {
	return (
		<Badge variant={'secondary'}>
			<span className="text-[22px]">{props.icon}</span>
			{props.title}
		</Badge>
	);
};

export default SkillCard;
