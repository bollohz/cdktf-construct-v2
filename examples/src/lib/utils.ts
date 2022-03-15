/**
 * Utils helper class, with general purpose function
 */
export default class Utils {
  static resourceNaming(val: string, tag: { [key: string]: string }) {
    return `${tag["datalab.prefix"]}-${tag.env}-${tag["datalab.project"]}-${val}-${tag.region}`;
  }
}
