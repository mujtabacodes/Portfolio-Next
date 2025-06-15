'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaMapPin,
  FaBuilding,
  FaUsers,
  FaBook,
  FaEye,
  FaExclamationCircle,
} from 'react-icons/fa';
import { motion } from 'motion/react';
import { Card } from './card';
import { SectionHeader } from '../section-header';
import { MagicCard } from './magic-card';
import { Section } from '@/styles/utils';
import { cn } from '@/lib/utils';

interface ProfileData {
  avatar_url: string;
  name: string | null;
  login: string;
  bio: string | null;
  location: string | null;
  company: string | null;
  blog: string | null;
  created_at: string;
  followers: number;
  following: number;
  public_repos: number;
}

interface Repository {
  name: string;
  repo: string;
  description: string | null;
  demo: string | null;
  language: {
    name: string;
    color: string;
  } | null;
  stars: number;
  forks: number;
  updated_at: string;
  topics: string[];
}

const GitHubSection = () => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('overview');
  const { theme } = useTheme();

  const username = 'mujtabacodes';

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch profile data
      const profileResponse = await fetch(
        `https://api.github.com/users/${username}`,
      );
      if (!profileResponse.ok) {
        throw new Error('Failed to fetch profile data');
      }
      const profile: ProfileData = await profileResponse.json();

      // Fetch repositories
      const reposResponse = await fetch(
        `https://pinned.berrysauce.dev/get/${username}`,
      );
      if (!reposResponse.ok) {
        throw new Error('Failed to fetch pinned repositories');
      }
      const repos: Repository[] = await reposResponse.json();

      setProfileData(profile);
      setRepositories(repos);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime()); // Use getTime() for numeric subtraction
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return '1 day ago';
    if (diffDays < 30) return `${diffDays} days ago`;
    if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`;
    return `${Math.ceil(diffDays / 365)} years ago`;
  };

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div>
    </div>
  );

  const ErrorMessage = () => (
    <div className="bg-red-50 border border-red-200 dark:border-red-700 rounded-xl p-6">
      <div className="flex items-center gap-3">
        <FaExclamationCircle className="w-6 h-6 text-red-600" />
        <div>
          <h3 className="text-lg font-semibold text-red-800 dark:text-red-300">
            Error Loading GitHub Data
          </h3>
          <p className="text-red-600 dark:text-red-400">{error}</p>
          <button
            onClick={fetchGitHubData}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );

  const ProfileOverview = () => {
    if (!profileData) return null;
    return (
      <Card className=" rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <img
              src={profileData.avatar_url}
              alt={profileData.name || profileData.login}
              className="w-32 h-32 rounded-full border-4 border-gray-100 dark:border-gray-700"
            />
          </div>
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {profileData.name || profileData.login}
            </h2>
            <div className="lex flex-col gap-1 mb-2">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                @{profileData.login}
              </p>
              {profileData.bio && (
                <p className="text-gray-700 dark:text-gray-300 ">
                  {profileData.bio}
                </p>
              )}

              {profileData.location && (
                <div className="flex items-center gap-2">
                  <FaMapPin className="w-4 h-4" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {profileData.location}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <FaExternalLinkAlt className="w-3 h-3" />
                <Link
                  href={'https://github.com/mujtabacodes'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                >
                  https://github.com/mujtabacodes
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600 mb-4">
              {[
                {
                  icon: <FaUsers className="w-4 h-4" />,
                  value: profileData.followers,
                  label: 'followers',
                },
                {
                  icon: <FaUsers className="w-4 h-4" />,
                  value: profileData.following,
                  label: 'following',
                },
                {
                  icon: <FaBook className="w-4 h-4" />,
                  value: profileData.public_repos,
                  label: 'repositories',
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-blue-50 dark:bg-slate-50 rounded-lg mt-2 flex flex-col items-center "
                >
                  <span className="flex gap-2">
                    {stat.icon}
                    <span className="font-semibold">{stat.value}</span>
                  </span>
                  <span className="">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://github-readme-stats-salesp07.vercel.app/api/top-langs/?username=mujtabacodes&hide=HTML&langs_count=8&layout=compact&theme=react&border_radius=10&size_weight=0.5&count_weight=0.5&exclude_repo=github-readme-stats"
            alt="top langs"
          />
        </div>
      </Card>
    );
  };

  const RepositoryCard = ({ repo }: { repo: Repository }) => (
    <MagicCard className=" p-6 transition-transform duration-500 hover:scale-105">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
          <FaBook className="w-5 h-5" />
          {repo.name}
        </h3>
        <a
          href={repo.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
        >
          <FaExternalLinkAlt className="w-5 h-5" />
        </a>
      </div>

      {repo.description && (
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {repo.description}
        </p>
      )}

      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center gap-4">
          {repo.language && (
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>{repo.language.name}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <FaStar className="w-4 h-4" />
            <span>{repo.stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCodeBranch className="w-4 h-4" />
            <span>{repo.forks}</span>
          </div>
        </div>
      </div>

      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {repo.topics.slice(0, 3).map((topic, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-md text-xs"
            >
              {topic}
            </span>
          ))}
          {repo.topics.length > 3 && (
            <span className="px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs">
              +{repo.topics.length - 3} more
            </span>
          )}
        </div>
      )}
    </MagicCard>
  );

  const GitHubStats = () => {
    return (
      <Card className=" rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
          <FaGithub className="w-5 h-5 " />
          GitHub Stats
        </h3>
        <div className="flex flex-col items-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-6">
            <img
              src="https://github-readme-stats-salesp07.vercel.app/api?username=mujtabacodes&count_private=true&show_icons=true&theme=react&rank_icon=github&border_radius=10"
              alt="readme stats"
            />
            <img
              src="https://github-readme-streak-stats-salesp07.vercel.app/?user=mujtabacodes&count_private=true&theme=react&border_radius=10"
              alt="streak stats"
            />
          </div>
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=mujtabacodes&theme=react-dark&hide_border=true&hide_title=false&area=true&custom_title=Total%20contribution%20graph%20in%20all%20repo"
            width="95%"
            alt="activity graph"
          />
        </div>
      </Card>
    );
  };

  const StatCard = ({
    icon,
    label,
    value,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string | number;
  }) => (
    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex items-center gap-4">
      <div className="text-blue-600 text-2xl dark:text-blue-400">{icon}</div>
      <div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{label}</p>
        <p className="text-gray-900 dark:text-white font-bold text-lg">
          {value}
        </p>
      </div>
    </div>
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;
  if (!profileData) return null;
  const tabs = ['overview', 'repositories'];

  return (
    <Section id="github" className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          Icon={<FaGithub className="w-10 h-10" />}
          heading="GitHub Portfolio"
          subTitle="Explore my latest projects and contributions"
          align="center"
        />

        <div className="flex justify-center mb-8">
          <div className="bg-secondary rounded-full p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn('relative px-4 py-2 rounded-full')}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="clickedbutton"
                    transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                    className={cn(
                      'absolute inset-0 bg-blue-50 dark:bg-slate-50 rounded-full ',
                    )}
                  />
                )}

                <span
                  className={`relative block  ${activeTab === tab ? 'text-black' : 'text-slate-50'}`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            <ProfileOverview />
            <GitHubStats />
          </div>
        )}

        {activeTab === 'repositories' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Latest Repositories
              </h3>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center gap-2"
              >
                View All <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repositories.map((repo) => (
                <RepositoryCard key={repo.name} repo={repo} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default GitHubSection;
