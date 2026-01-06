export type Activity = {
  id: string;
  title: string;
  date: Date;
  description: string;
  category: string;
  isCancelled: boolean;
  city: string;
  venue: string;
  latitude: number;
  longitude: number;
  attendees: Profile[];
  isGoing: boolean;
  isHost: boolean;
  hostId: string;
  hostDisplayName: string;
  hostImageUrl?: string;
};

export type Profile = {
  id: string;
  displayName: string;
  bio?: string;
  imageUrl?: string;
};

export type Photo = {
  id: string;
  url: string;
};

export type User = {
  id: string;
  email: string;
  displayName: string;
  imageUrl?: string;
};

export type LocationIQSuggestion = {
  place_id: string;
  osm_id: string;
  osm_type: string;
  licence: string;
  lat: string;
  lon: string;
  boundingbox: string[];
  class: string;
  type: string;
  display_name: string;
  display_place: string;
  display_address: string;
  address: LocationIQAddress;
};

export type LocationIQAddress = {
  name: string;
  country: string;
  country_code: string;
  house_number?: string;
  road?: string;
  neighbourhood?: string;
  suburb?: string;
  town?: string;
  village?: string;
  city?: string;
  postcode?: string;
};

export type ActivityFormValues = {
  title: string;
  description: string;
  category: string;
  date: Date;
  city?: string;
  venue: string;
  latitude?: number;
  longitude?: number;
};

export type UpdateActivityPayload = {
  id: string;
  data: ActivityFormValues;
};
