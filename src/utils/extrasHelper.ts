import { defaultTrack } from "../data/trackStatus";
import { BASE_API_URL } from "../constants";
import { Extras } from "../models";

const getExtras = async (): Promise<Extras> => {
  try {
    const currentTrack = (await (await fetch(`${BASE_API_URL}track`)).json() as string);
    const extras: Extras = {
      track: parseTrack(currentTrack),
    }
    return extras;
  } catch {
    console.log('Error getting current track');
    console.log(getTrackUrl(parseTrack(defaultTrack)));
    const extras: Extras = {
      track: parseTrack(defaultTrack),
    }
    return extras;
  }
}

const parseTrack = (trackString: string): string => {
  return trackString.substring(1, trackString.indexOf('"', 2));
}

export const getTrackUrl= (track: string): string => {
  const searchableTrackString = track.replaceAll(' ', '+');
  return `http://www.youtube.com/results?search_query=${searchableTrackString}`;
}

export const getMapId = (winners: string[], maps: string[]): string => {
  const matchNumber = winners.length;
  if (matchNumber === 8) {
    return maps[matchNumber - 1].substring(0, maps[matchNumber - 1].indexOf(')'));
  }
  return maps[matchNumber].substring(0, maps[matchNumber].indexOf(')'));
}



export default getExtras;
