/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: awarenesshubcontent
 * Interface for AwarenessHubContent
 */
export interface AwarenessHubContent {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  contentType?: string;
  /** @wixFieldType text */
  summary?: string;
  /** @wixFieldType text */
  author?: string;
  /** @wixFieldType date */
  publicationDate?: Date | string;
  /** @wixFieldType image */
  mainImage?: string;
  /** @wixFieldType url */
  downloadUrl?: string;
  /** @wixFieldType text */
  campaignGoals?: string;
}


/**
 * Collection ID: healthalerts
 * Interface for HealthAlerts
 */
export interface HealthAlerts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  alertTitle?: string;
  /** @wixFieldType text */
  alertMessage?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType text */
  severityLevel?: string;
  /** @wixFieldType date */
  issueDate?: Date | string;
  /** @wixFieldType time */
  issueTime?: any;
  /** @wixFieldType datetime */
  validUntil?: Date | string;
}


/**
 * Collection ID: healthhelplines
 * Interface for HealthHelplines
 */
export interface HealthHelplines {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  helplineName?: string;
  /** @wixFieldType text */
  contactNumber?: string;
  /** @wixFieldType text */
  operatingHours?: string;
  /** @wixFieldType text */
  serviceDescription?: string;
  /** @wixFieldType url */
  websiteUrl?: string;
}


/**
 * Collection ID: mentalwellnessresources
 * Interface for MentalWellnessResources
 */
export interface MentalWellnessResources {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  type?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  contactInformation?: string;
  /** @wixFieldType url */
  externalLink?: string;
  /** @wixFieldType image */
  thumbnailImage?: string;
  /** @wixFieldType text */
  targetAudience?: string;
  /** @wixFieldType text */
  category?: string;
}


/**
 * Collection ID: officialgovernmentlinks
 * Interface for OfficialGovernmentLinks
 */
export interface OfficialGovernmentLinks {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  linkTitle?: string;
  /** @wixFieldType url */
  linkUrl?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType number */
  displayOrder?: number;
}


/**
 * Collection ID: verifiedhealthinformation
 * Interface for VerifiedHealthInformation
 */
export interface VerifiedHealthInformation {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  healthQuestion?: string;
  /** @wixFieldType text */
  verifiedAnswer?: string;
  /** @wixFieldType text */
  sourceCitation?: string;
  /** @wixFieldType text */
  healthCategory?: string;
  /** @wixFieldType text */
  keywords?: string;
  /** @wixFieldType datetime */
  lastUpdated?: Date | string;
  /** @wixFieldType text */
  expertReviewer?: string;
}
