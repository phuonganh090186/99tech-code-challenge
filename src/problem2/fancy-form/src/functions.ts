import { Currency } from "./types";
import * as yup from "yup";

/**
 *
 * @param currencyList
 * @returns List of currenncy that has been removed duplicate currency, keep the latest date currency
 */
export const removeDuplicateCurrency = (currencyList: Currency[]) => {
  const sortByDecsDateList = currencyList.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const result: Currency[] = [];
  sortByDecsDateList.forEach((item) => {
    if (!result.find((value) => value.currency === item.currency)) {
      result.push(item);
    }
  });
  return result;
};

/**
 *
 * @param inAmount Amount of input currency to convert
 * @param inCur Input currency to convert
 * @param outCur Output currency to convert
 * @returns Amount of output currency after converting
 */
export const convertCurrency = (
  inAmount?: number,
  sendCur?: string,
  receiveCur?: string,
  currencyList?: Currency[],
  decimal?: number
) => {
  let result = "";
  const inCur = currencyList?.find((item) => item.currency === sendCur);
  const outCur = currencyList?.find((item) => item.currency === receiveCur);
  if (inAmount !== undefined && inCur && outCur) {
    result = ((inAmount * inCur.price) / outCur.price)
      .toFixed(decimal ?? 6)
      .toString();
  }
  return result;
};

/**
 * Validate input
 */
const floatNumbeRegx = /^\d+(\.d+)?(.)?(.\d+(\.d+)?)?$/;

export const validate = yup.object().shape({
  send_amount: yup
    .string()
    .required("Amount is required")
    .test("send_amount", "Amount must be number", function (value) {
      return (
        floatNumbeRegx.test(value) || value?.length === 0 || value === null
      );
    }),
  send_currency: yup.string().required("Currency is required"),
  receive_amount: yup
    .string()
    .required("Amount is required")
    .test("receive_amount", "Amount must be number", function (value) {
      return (
        floatNumbeRegx.test(value) || value?.length === 0 || value === null
      );
    }),
  receive_currency: yup.string().required("Currency is required"),
});

/**
 *
 * @param num
 * @param precision
 * @returns number with suffix of T,B,M,K
 */
export default function formatNumber(number: string, precision = 2) {
  let num = 0;
  try {
    num = parseFloat(number);
  } catch {
    return NaN;
  }
  const map = [
    { suffix: "T", threshold: 1e12 },
    { suffix: "B", threshold: 1e9 },
    { suffix: "M", threshold: 1e6 },
    { suffix: "K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
    return formatted;
  }

  return num;
}
