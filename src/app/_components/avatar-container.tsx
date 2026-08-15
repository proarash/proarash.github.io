import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

const AvatarContainer = () => {
  return (
    <Avatar className="bg-secondary/90 w-37.5 h-37.5">
      <AvatarImage src={"me.png"} />
      <AvatarFallback>AG</AvatarFallback>
    </Avatar>
  );
};

export default AvatarContainer;
