import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterIcon,
  TwitterShareButton,
  EmailShareButton,
  EmailIcon,
  LivejournalShareButton,
  LivejournalIcon,
  TelegramShareButton,
  TelegramIcon,
} from "next-share";
import { SocialContainer } from "./share-to-social.style";

interface SocialShareTypes {
  title: string;
  url: string;
  media: string;
  description: string;
}

const ShareToSocialMedia = ({
  title,
  url,
  media,
  description,
}: SocialShareTypes) => {
  const emailBody = `${description}\n\nRead full article here: <a href="https://blog.tonnipaul.com/${url}">Read more here</a>`;
  return (
    <SocialContainer>
      <p>Share to:</p>

      <div>
        <FacebookShareButton
          title={title}
          url={`https://blog.tonnipaul.com/${url}`}
          aria-label="facebook"
        >
          <FacebookIcon round size={32} />
        </FacebookShareButton>

        <TwitterShareButton
          hashtags={["tonnipaul", "tonnipaulblog", "webdevelopment"]}
          title={title}
          url={`https://blog.tonnipaul.com/${url}`}
          aria-label="twitter"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <WhatsappShareButton
          title={title}
          url={`https://blog.tonnipaul.com/${url}`}
          aria-label="whatsapp"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <LinkedinShareButton
          title={title}
          url={`https://blog.tonnipaul.com/${url}`}
          aria-label="linkedin"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <EmailShareButton
          url={url}
          subject={`TonniPaul Blog - ${title}`}
          body={emailBody}
          aria-label="email"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>

        <TelegramShareButton url={url} title={title} aria-label="telegram">
          <TelegramIcon size={32} round />
        </TelegramShareButton>

        <PinterestShareButton
          title={title}
          description={description}
          url={`https://blog.tonnipaul.com/${url}`}
          media={media}
          aria-label="pinterest"
        >
          <PinterestIcon round size={32} />
        </PinterestShareButton>

        <RedditShareButton
          title={title}
          url={`https://blog.tonnipaul.com/${url}`}
          aria-label="reddit"
        >
          <RedditIcon size={32} round />
        </RedditShareButton>

        <LivejournalShareButton
          url={url}
          title={title}
          description={description}
          aria-label="livejournal"
        >
          <LivejournalIcon size={32} round />
        </LivejournalShareButton>
      </div>
    </SocialContainer>
  );
};

export default ShareToSocialMedia;
