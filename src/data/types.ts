/**
 * Shared Type Definitions for Singaporean Food Personality Quiz
 *
 * This module contains all type definitions used across the dish data files.
 * These types define the structure for personality profiles, quiz attributes,
 * and meme content for iconic Singaporean dishes.
 *
 * Personality Trait Categories:
 * - Energy Level: high | medium | low
 * - Social Preference: extrovert | ambivert | introvert
 * - Flavor Profile: sweet | savory | spicy | sour | balanced
 * - Adventure Level: adventurous | moderate | traditional
 * - Time of Day: morning | afternoon | evening | night
 * - Setting: casual | moderate | elegant
 * - Texture Preference: soft | crunchy | chewy | varied
 * - Cultural Authenticity: root-deep | modern-fusion | street-smart
 */

/**
 * Energy level of the dish personality
 */
export type EnergyLevel = "high" | "medium" | "low";

/**
 * Social preference matching the dish personality
 */
export type SocialPreference = "extrovert" | "ambivert" | "introvert";

/**
 * Primary flavor profile of the dish
 */
export type FlavorProfile = "sweet" | "savory" | "spicy" | "sour" | "balanced";

/**
 * How adventurous the dish represents
 */
export type AdventureLevel = "adventurous" | "moderate" | "traditional";

/**
 * Best time of day to enjoy the dish
 */
export type TimeOfDay = "morning" | "afternoon" | "evening" | "night";

/**
 * Typical setting where the dish is enjoyed
 */
export type Setting = "casual" | "moderate" | "elegant";

/**
 * Texture preference of the dish
 */
export type TexturePreference = "soft" | "crunchy" | "chewy" | "varied";

/**
 * Cultural authenticity level
 */
export type CulturalAuthenticity =
  | "root-deep"
  | "modern-fusion"
  | "street-smart";

/**
 * Meme-style content for Gen Z appeal
 */
export interface DishMemeContent {
  tiktokCaption: string; // Like "no thoughts just [dish]"
  vibeCheck: string; // e.g., "Main character energy"
  memePotential: string; // e.g., "This hits different 🍵💀"
  emojiCombo: string[]; // Array of emojis representing the vibe
  internetSlang: string[]; // Relevant slang: "bussin", "slay", "goated", etc.
}

/**
 * Modifier system - allows dishes to have variants based on trait thresholds
 */
export interface DishModifier {
  id: string;
  name: string; // e.g., "Crispy Kaya Toast"
  description: string; // Short modifier description
  triggerTrait: string; // Which trait triggers this modifier
  triggerThreshold: number; // e.g., 80% on that trait
  modifierTraits: Partial<{
    energyLevel: EnergyLevel;
    socialPreference: SocialPreference;
    flavorProfile: FlavorProfile;
    adventureLevel: AdventureLevel;
    timeOfDay: TimeOfDay;
    setting: Setting;
    texturePreference: TexturePreference;
    culturalAuthenticity: CulturalAuthenticity;
  }>;
  memeCaption: string; // Gen Z style caption
  emojiCombo: string[]; // Override emojis for this modifier
}

/**
 * Best paired with section - suggests complementary dishes
 */
export interface PairedWith {
  dishId: string; // ID of paired dish
  reason: string; // e.g., "The yin to your yang 🍜"
  compatibilityScore: number; // 0-100
}

/**
 * Quiz attributes that define how a dish matches user personality
 */
export interface QuizAttributes {
  energyLevel: EnergyLevel;
  socialPreference: SocialPreference;
  flavorProfile: FlavorProfile;
  adventureLevel: AdventureLevel;
  timeOfDay: TimeOfDay;
  setting: Setting;
  texturePreference: TexturePreference;
  culturalAuthenticity: CulturalAuthenticity;
}

/**
 * Visual style attributes for the dish card
 */
export interface VisualStyle {
  colors: string[];
  mood: string;
}

/**
 * Main Dish interface representing a Singaporean dish with personality
 */
export interface Dish {
  id: string;
  emoji: string; // Unique standardized emoji for the dish
  name: string;
  chineseName: string;
  description: string;
  personalityTraits: string[];
  visualStyle: VisualStyle;
  quote: string;
  category: string;
  // Base version info
  baseName?: string; // Original dish name for modifiers
  baseMemeCaption?: string;
  baseVibeCheck?: string;
  // Quiz-relevant attributes
  quizAttributes: QuizAttributes;
  // Modifier system
  hasModifiers?: boolean;
  modifiers?: DishModifier[];
  // Gen Z meme content
  memeContent?: DishMemeContent;
  // Best paired with - computed dynamically based on personality compatibility
  pairedWith?: PairedWith[];
}

/**
 * Helper type for dishes without computed pairings (used during creation)
 */
export interface DishBase {
  id: string;
  emoji: string;
  name: string;
  chineseName: string;
  description: string;
  personalityTraits: string[];
  visualStyle: VisualStyle;
  quote: string;
  category: string;
  baseName?: string;
  baseMemeCaption?: string;
  baseVibeCheck?: string;
  quizAttributes: QuizAttributes;
  hasModifiers?: boolean;
  modifiers?: DishModifier[];
  memeContent?: DishMemeContent;
}
