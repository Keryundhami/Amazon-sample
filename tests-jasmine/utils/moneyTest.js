import { formatCurrency } from "../../scripts/utils/money.js";

describe('Test Suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works wtih 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('round up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});