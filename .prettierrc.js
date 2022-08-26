module.exports = {
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^components/(.*)$',
    '^contexts/(.*)$',
    '^utils/(.*)$',
    '^types/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
