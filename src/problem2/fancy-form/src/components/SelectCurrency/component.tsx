import { Wrapper } from "./styles";
import { CurrencyOption } from "../../types";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";

import ampLUNA from "../../assets/images/ampLUNA.svg";
import ATOM from "../../assets/images/ATOM.svg";
import axlUSDC from "../../assets/images/axlUSDC.svg";
import BLUR from "../../assets/images/BLUR.svg";
import bNEO from "../../assets/images/bNEO.svg";
import BUSD from "../../assets/images/BUSD.svg";
import ETH from "../../assets/images/ETH.svg";
import EVMOS from "../../assets/images/EVMOS.svg";
import GMX from "../../assets/images/GMX.svg";
import IBCX from "../../assets/images/IBCX.svg";
import IRIS from "../../assets/images/IRIS.svg";
import KUJI from "../../assets/images/KUJI.svg";
import LSI from "../../assets/images/LSI.svg";
import LUNA from "../../assets/images/LUNA.svg";
import OKB from "../../assets/images/OKB.svg";
import OKT from "../../assets/images/OKT.svg";
import OSMO from "../../assets/images/OSMO.svg";
import RATOM from "../../assets/images/RATOM.svg";
import rSWTH from "../../assets/images/rSWTH.svg";
import STATOM from "../../assets/images/STATOM.svg";
import STEVMOS from "../../assets/images/STEVMOS.svg";
import STLUNA from "../../assets/images/STLUNA.svg";
import STOSMO from "../../assets/images/STOSMO.svg";
import STRD from "../../assets/images/STRD.svg";
import SWTH from "../../assets/images/SWTH.svg";
import USC from "../../assets/images/USC.svg";
import USD from "../../assets/images/USD.svg";
import USDC from "../../assets/images/USDC.svg";
import WBTC from "../../assets/images/WBTC.svg";
import wstETH from "../../assets/images/wstETH.svg";
import YieldUSD from "../../assets/images/YieldUSD.svg";
import ZIL from "../../assets/images/ZIL.svg";

const CurrencyImageMap = new Map<string, string>([
  ["ampLUNA", ampLUNA],
  ["ATOM", ATOM],
  ["axlUSDC", axlUSDC],
  ["BLUR", BLUR],
  ["bNEO", bNEO],
  ["BUSD", BUSD],
  ["ETH", ETH],
  ["EVMOS", EVMOS],
  ["GMX", GMX],
  ["IBCX", IBCX],
  ["IRIS", IRIS],
  ["KUJI", KUJI],
  ["LSI", LSI],
  ["LUNA", LUNA],
  ["OKB", OKB],
  ["OKT", OKT],
  ["OSMO", OSMO],
  ["RATOM", RATOM],
  ["rSWTH", rSWTH],
  ["STATOM", STATOM],
  ["STEVMOS", STEVMOS],
  ["STLUNA", STLUNA],
  ["STOSMO", STOSMO],
  ["STRD", STRD],
  ["SWTH", SWTH],
  ["USC", USC],
  ["USD", USD],
  ["USDC", USDC],
  ["WBTC", WBTC],
  ["wstETH", wstETH],
  ["YieldUSD", YieldUSD],
  ["ZIL", ZIL],
]);

interface Props extends SelectProps {
  options: CurrencyOption[];
}

const SelectCurrency = (props: Props) => {
  const { options, ...rest } = props;

  return (
    <Wrapper>
      <Select {...rest} displayEmpty>
        <MenuItem value="" disabled>
          Select Currency
        </MenuItem>
        {options.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            <ListItemIcon>
              <img
                style={{ width: "35px" }}
                src={CurrencyImageMap.get(item.name)}
                alt={item.name}
              />
            </ListItemIcon>
            <ListItemText style={{ marginLeft: "5px" }} primary={item.name} />
          </MenuItem>
        ))}
      </Select>
    </Wrapper>
  );
};

SelectCurrency.defaultProps = {
  options: [],
};

export default SelectCurrency;
