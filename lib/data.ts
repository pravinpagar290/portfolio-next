/**
 * Legacy Data File - DEPRECATED
 *
 * This file is maintained for backward compatibility.
 * All new code should import from @/data/userData.ts instead.
 *
 * This file will eventually be removed in v2.0
 */

import {
  SITE_CONFIG as SiteConfig,
  PROJECTS as ProjectList,
  SKILL_CATEGORIES as SkillCategories,
  SOCIAL_LINKS as SocialLinks,
  EXPERIENCE as ExperienceList,
  NAVIGATION as NavigationLinks,
} from "@/data/userData";

// Export with original names for backward compatibility
export const SITE_CONFIG = SiteConfig;
export const PROJECTS = ProjectList;
export const SKILL_CATEGORIES = SkillCategories;
export const SOCIAL_LINKS = SocialLinks;
export const EXPERIENCE = ExperienceList;
export const NAVIGATION = NavigationLinks;
