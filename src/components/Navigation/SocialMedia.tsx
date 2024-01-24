import { Social } from "@/types/content/navigation";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";

type Props = {
  social: Social;
};

const SocialMedia = ({ social }: Props) => {
  const { facebook, instagram, mail } = social;

  return (
    <ul className="flex  gap-4">
      <li>
        {instagram && (
          <a href={instagram}>
            <Instagram />
          </a>
        )}
      </li>
      <li>
        {facebook && (
          <a href={facebook}>
            <Facebook />
          </a>
        )}
      </li>
      <li>
        {mail && (
          <a href={`mailto:${mail}`}>
            <EnvelopeIcon className="text-green" height={24} width={24} />
          </a>
        )}
      </li>
    </ul>
  );
};

export default SocialMedia;
