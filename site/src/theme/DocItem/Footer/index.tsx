import { useDoc } from "@docusaurus/plugin-content-docs/client";
import type { WrapperProps } from "@docusaurus/types";
import Footer from "@theme-original/DocItem/Footer";
import type FooterType from "@theme/DocItem/Footer";
import GitUrlParse from "git-url-parse";
import React, { JSX } from "react";
import GitHubContributors from "./GitHubContributors";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const { metadata } = useDoc();
  const file = metadata.editUrl;
  const additionalContributors = metadata.frontMatter.additional_contributors;
  const showGitContributors: boolean =
    metadata.frontMatter.show_git_contributors !== false;

  if (!file) {
    return <Footer {...props} />;
  }

  const info = GitUrlParse(file);
  const { name, owner, filepath } = info;

  return (
    <>
      <Footer {...props} />
      <GitHubContributors
        repo={name}
        owner={owner}
        filePath={filepath}
        showGitContributors={showGitContributors}
        additionalContributors={additionalContributors}
      />
    </>
  );
}
