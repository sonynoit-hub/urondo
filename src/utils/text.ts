export const toFullWidthDigits = (value: string | number) =>
  String(value).replace(/[0-9]/g, (digit) =>
    String.fromCharCode(digit.charCodeAt(0) + 0xfee0)
  );

export const toAsciiDigits = (value: string) =>
  value.replace(/[０-９]/g, (digit) =>
    String.fromCharCode(digit.charCodeAt(0) - 0xfee0)
  );
