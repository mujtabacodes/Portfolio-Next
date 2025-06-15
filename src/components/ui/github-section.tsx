'use client';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './card';
import { SectionHeader } from '../section-header';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaCircle } from 'react-icons/fa';

const GITHUB_USERNAME = 'mujtabacodes';
const PROFILE_URL = `https://api.github.com/users/${GITHUB_USERNAME}`;
const REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`;

interface GithubProfile {
  avatar_url: string;
  html_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const LANG_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Java: '#b07219',
  C: '#555555',
  Cpp: '#f34b7d',
  Go: '#00ADD8',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Dart: '#00B4AB',
  Other: '#ccc',
};

function getLangColor(lang: string) {
  return LANG_COLORS[lang] || '#ccc';
}

export default function GithubSection() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(PROFILE_URL),
          fetch(REPOS_URL),
        ]);
        if (!profileRes.ok || !reposRes.ok) throw new Error('GitHub API error');
        const profileData = await profileRes.json();
        const reposData = await reposRes.json();
        setProfile(profileData);
        setRepos(reposData);
      } catch (e) {
        setError('Failed to load GitHub data.');
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Language stats for doughnut chart
  const languageStats = repos.reduce((acc: Record<string, number>, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});
  const languages = Object.keys(languageStats);
  const totalLang = Object.values(languageStats).reduce((a, b) => a + b, 0);

  // Top 8 repos by stars
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 8);

  // Doughnut chart SVG
  function DoughnutChart() {
    const size = 120;
    const stroke = 18;
    let offset = 0;
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    return (
      <svg width={size} height={size} className="rotate-[-90deg]">
        {languages.map((lang, i) => {
          const value = languageStats[lang];
          const percent = value / totalLang;
          const dash = percent * circumference;
          const dashArray = `${dash} ${circumference - dash}`;
          const circle = (
            <circle
              key={lang}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={getLangColor(lang)}
              strokeWidth={stroke}
              strokeDasharray={dashArray}
              strokeDashoffset={offset}
            />
          );
          offset -= dash;
          return circle;
        })}
      </svg>
    );
  }

  return (
    <section
      className="relative w-full max-w-7xl mx-auto py-20 px-4 md:px-8 overflow-hidden"
      id="github"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#203a43] opacity-90 blur-2xl animate-pulse" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          <span>My GitHub</span>
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-200 mb-12 animate-fade-in">
          Open source, code, and collaboration.
        </p>
      </motion.div>
      {loading ? (
        <div className="text-center py-10 text-white/80">
          Loading GitHub data...
        </div>
      ) : error ? (
        <div className="text-center text-red-400 py-10">{error}</div>
      ) : profile ? (
        <>
          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto max-w-3xl mb-16 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 flex flex-col md:flex-row items-center gap-8"
          >
            <img
              src={profile.avatar_url}
              alt={profile.login}
              className="w-32 h-32 rounded-full border-4 border-white/30 shadow-lg mb-4 md:mb-0"
            />
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-2xl md:text-3xl font-bold text-white drop-shadow">
                  {profile.name || profile.login}
                </span>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-gray-300 hover:text-primary transition"
                  title="View on GitHub"
                >
                  <FaGithub size={28} />
                </a>
              </div>
              <div className="text-blue-200 text-lg font-mono">
                @{profile.login}
              </div>
              <div className="mt-2 text-white/90 text-base md:text-lg max-w-xl mx-auto md:mx-0">
                {profile.bio}
              </div>
              <div className="flex gap-6 mt-4 justify-center md:justify-start text-white/80">
                <span>Repos: {profile.public_repos}</span>
                <span>Followers: {profile.followers}</span>
                <span>Following: {profile.following}</span>
              </div>
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all text-lg"
              >
                View on GitHub
              </a>
            </div>
            {/* Doughnut chart */}
            {languages.length > 0 && (
              <div className="flex flex-col items-center gap-2">
                <DoughnutChart />
                <div className="flex flex-wrap gap-2 mt-2 justify-center">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="flex items-center gap-1 text-xs text-white/80"
                    >
                      <FaCircle style={{ color: getLangColor(lang) }} /> {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Repo grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {topRepos.map((repo) => (
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                key={repo.id}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6 flex flex-col gap-3 transition-all hover:shadow-2xl hover:bg-white/20"
              >
                <div className="flex items-center gap-2 mb-1">
                  <FaGithub className="text-gray-300" />
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-lg text-white hover:underline"
                  >
                    {repo.name}
                  </a>
                </div>
                <div className="text-gray-200 text-sm mb-2 min-h-[40px]">
                  {repo.description || (
                    <span className="italic text-gray-400">No description</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-3 mt-auto text-xs text-white/80">
                  {repo.language && (
                    <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20">
                      <FaCircle
                        style={{ color: getLangColor(repo.language) }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20">
                    <FaStar className="text-yellow-300" />{' '}
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20">
                    <FaCodeBranch className="text-blue-300" />{' '}
                    {repo.forks_count}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      ) : null}
    </section>
  );
}
