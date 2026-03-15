import { FileText, Youtube } from "lucide-react";
import { PageSection } from "@/portfolio/components/section/PageSection";
import {
  type DevlogSubscriptionCta,
  type DevlogUpdateItem,
  type DevlogVideoItem,
} from "@/portfolio/components/devlog/devlog.types";
import { DevlogSectionHeading } from "@/portfolio/components/devlog/DevlogSectionHeading";
import { DevlogSubscribeCard } from "@/portfolio/components/devlog/DevlogSubscribeCard";
import { DevlogUpdateCard } from "@/portfolio/components/devlog/DevlogUpdateCard";
import { DevlogVideoCard } from "@/portfolio/components/devlog/DevlogVideoCard";
import {
  devlogRecentVideos,
  devlogSectionContent,
  devlogSubscribeCta,
  devlogUpdates,
} from "@/portfolio/content/devlog.page";

type DevlogContentSectionProps = {
  sectionContent?: typeof devlogSectionContent;
  updates?: readonly DevlogUpdateItem[];
  videos?: readonly DevlogVideoItem[];
  subscribeCta?: DevlogSubscriptionCta;
};

/**
 * Main Devlog content layout.
 * Keeping list rendering here lets the page stay as a simple high-level route
 * composer, matching the same architectural pattern used by Home.
 */
export const DevlogContentSection = ({
  sectionContent = devlogSectionContent,
  updates = devlogUpdates,
  videos = devlogRecentVideos,
  subscribeCta = devlogSubscribeCta,
}: DevlogContentSectionProps) => {
  return (
    <PageSection withTopSeparator className="relative">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,0.95fr)]">
        <div className="space-y-8">
          <DevlogSectionHeading
            icon={FileText}
            badgeLabel={sectionContent.updatesBadge}
            title={sectionContent.updatesTitle}
          />

          <ul className="space-y-6">
            {updates.map((update) => (
              <li key={update.id}>
                <DevlogUpdateCard update={update} />
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
          <DevlogSectionHeading
            icon={Youtube}
            badgeLabel={sectionContent.videosBadge}
            title={sectionContent.videosTitle}
          />

          <ul className="space-y-5">
            {videos.map((video) => (
              <li key={video.id}>
                <DevlogVideoCard video={video} />
              </li>
            ))}
          </ul>

          <DevlogSubscribeCard cta={subscribeCta} />
        </aside>
      </div>
    </PageSection>
  );
};
