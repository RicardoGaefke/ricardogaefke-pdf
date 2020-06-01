// eslint-disable-next-line no-unused-vars
import psl, { ParsedDomain, ParseError } from 'psl';

// eslint-disable-next-line import/prefer-default-export
export class Href {
  private parsed: ParsedDomain | ParseError;

  private valid: boolean;

  constructor(url: string) {
    this.parsed = psl.parse(url);
    this.valid = psl.isValid(url);
  }

  isValid = (): boolean => this.valid;

  toLogin = (): string => {
    if (this.parsed.error) return this.parsed.error.message;
    if (!this.parsed.subdomain) return `identity.${this.parsed.domain}`;
    return `${(this.parsed.subdomain as string).replace('www', 'identity')}.${this.parsed.domain}`;
  };
}
