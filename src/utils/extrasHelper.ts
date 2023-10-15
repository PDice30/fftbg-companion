import { defaultTrack } from "../data/trackStatus";
import { BASE_TRACK_URL } from "../constants";
import { Extras, FFTMap, Track } from "../models";

const getExtras = async (): Promise<Extras> => {
  try {
    const currentTrack = (await (await fetch(`${BASE_TRACK_URL}`)).json() as Track);
    const extras: Extras = {
      trackTitle: currentTrack.Title,
    }
    return extras;
  } catch {
    console.log('Error getting current track');
    console.log(getTrackUrl(parseTrack(defaultTrack)));
    const extras: Extras = {
      trackTitle:parseTrack(defaultTrack),
    }
    return extras;
  }
}

export const getTrackUrl= (track: string): string => {
  const searchableTrackString = track.replaceAll(' ', '+').replaceAll('&', '');
  return `http://www.youtube.com/results?search_query=${searchableTrackString}`;
}

export const getMap = (winners: string[], maps: string[]): FFTMap => {
  const matchNumber = winners.length;
  if (matchNumber === 8) {
    const mapId = maps[matchNumber - 1].substring(0, maps[matchNumber - 1].indexOf(')'));
    const fullMapName = maps[matchNumber - 1];
    const parsedMapName = parseMapName(fullMapName);

    return {
      mapId,
      fullMapName,
      parsedMapName
    } as FFTMap;
  }

  const mapId = maps[matchNumber].substring(0, maps[matchNumber].indexOf(')'));
  const fullMapName = maps[matchNumber];
  const parsedMapName = parseMapName(fullMapName);

  return {
    mapId,
    fullMapName,
    parsedMapName,
  } as FFTMap;
}

const parseMapName = (fullMapName: string): string => {
  const string = fullMapName.substring(fullMapName.indexOf(')') + 1).trim();
  console.log(string);
  return fullMapName.substring(fullMapName.indexOf(')') + 1).trimEnd();
}

// Only needed if retreiving full string from dump
const parseTrack = (trackString: string): string => {
  return trackString.substring(1, trackString.indexOf('"', 2));
}

export default getExtras;
