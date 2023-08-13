import IPinfoWrapper from "node-ipinfo";

export const IP_INFO_WRAPPER = new IPinfoWrapper(process.env.IP_INFO_API_KEY ?? "");