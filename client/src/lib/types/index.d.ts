type Activity = {
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
};

type User = {
  id: string;
  email: string;
  displayName: string;
  imageUrl?: string;
};

type LocationIQSuggestion = {
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

type LocationIQAddress = {
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

type ActivityFormValues = {
  title: string;
  description: string;
  category: string;
  date: Date;
  city?: string;
  venue: string;
  latitude?: number;
  longitude?: number;
};

type UpdateActivityPayload = {
  id: string;
  data: ActivityFormValues;
};
