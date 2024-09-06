import { StaticImageData } from "next/image";

export interface MemberProps {
    name: string;
    school: string;
    role: string;
    image: string | StaticImageData;
    bio: string;
  }

export interface TeamMemberProps {
    member: MemberProps;
    name: string;
    image: string;
    isActive: boolean;
    onToggleExpand: () => void;
    onClick: () => void;
}
  