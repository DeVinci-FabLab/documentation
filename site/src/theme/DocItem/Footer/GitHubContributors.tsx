import Translate from "@docusaurus/Translate";
import React, { useEffect, useState } from "react";
import { getContributors } from "./contributors";
import styles from "./contributors.module.scss";

const FALLBACK_AVATAR =
  "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg";

/**
 * GitHub Contributors component
 * @param owner - The owner of the GitHub repository
 * @param repo - The name of the GitHub repository
 * @param filePath - The path to the file within the repository
 * @param showGitContributors - Whether to show GitHub contributors
 * @param additionalContributors - Additional contributors to include
 * @returns JSX.Element
 */
const GitHubContributors = ({
  owner,
  repo,
  filePath,
  showGitContributors,
  additionalContributors,
}) => {
  const [contributors, setContributors] = useState([]);

  const url = `https://api.github.com/repos/${owner}/${repo}/commits?path=${encodeURIComponent(
    filePath || ""
  )}`;

  useEffect(() => {
    if (showGitContributors) {
      const fetchFileContributors = () => {
        fetch(url)
          .then((response) => response.json())
          .then(async (commits) => {
            const gitContribs = await getContributors(commits);
            const allContributors = gitContribs.concat(
              additionalContributors || []
            );
            setContributors(allContributors);
          })
          .catch((error) => {
            console.error(error);
            setContributors(additionalContributors || []);
          });
      };
      fetchFileContributors();
    } else {
      setContributors(additionalContributors || []);
    }
  }, [showGitContributors, owner, repo, filePath, additionalContributors, url]);

  if (!contributors.length) {
    return null;
  }

  contributors.sort((a, b) => {
    return a.username.localeCompare(b.username);
  });

  return (
    <div className={styles.contributors}>
      <h3>
        <Translate
          id="theme.DocItem.Footer.Contributors"
          description="The name of the contributors header"
          values={{
            Contributors: "Contributors",
          }}
        >
          {"Contributors"}
        </Translate>
      </h3>

      <ul className={styles.wrapper}>
        {contributors?.map((contributor) => {
          const username = contributor.username ?? "unknown";
          const profileUrl = contributor?.html_url ?? "";
          const avatarUrl = contributor?.avatar_url || FALLBACK_AVATAR;

          return (
            <li key={username} className={styles.contributor}>
              <figure>
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${username}`}
                  aria-label={`Open ${username} link (new tab)`}
                >
                  <img
                    className={styles.avatar}
                    src={avatarUrl}
                    alt={`Avatar of ${username}`}
                    width={70}
                    height={70}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      if (e.currentTarget.src !== FALLBACK_AVATAR) {
                        e.currentTarget.src = FALLBACK_AVATAR;
                      }
                    }}
                  />
                </a>
                <figcaption className={styles.caption} title={username}>
                  {username}
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GitHubContributors;
