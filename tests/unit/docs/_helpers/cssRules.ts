export function findRuleDeclarations(
  css: string,
  requiredSelectors: string[]
): Record<string, string> | null {
  if (typeof css !== "string") {
    throw new TypeError("css must be a string");
  }

  if (!Array.isArray(requiredSelectors) || requiredSelectors.length === 0) {
    throw new TypeError("requiredSelectors must be a non-empty array");
  }

  if (!requiredSelectors.every((selector) => typeof selector === "string" && selector.trim().length > 0)) {
    throw new TypeError("requiredSelectors must contain non-empty strings");
  }

  const blockRegex = /([^{}]+)\{([^{}]*)\}/g;
  let match: RegExpExecArray | null;

  while ((match = blockRegex.exec(css)) !== null) {
    const selectorList = match[1]
      .split(",")
      .map((selector) => selector.trim())
      .filter(Boolean);

    const hasAllSelectors = requiredSelectors.every((selector) => selectorList.includes(selector));
    if (hasAllSelectors) {
      return parseDeclarations(match[2]);
    }
  }

  return null;
}

export function parseDeclarations(block: string): Record<string, string> {
  if (typeof block !== "string") {
    throw new TypeError("block must be a string");
  }

  const declarations: Record<string, string> = {};
  const normalized = block.replace(/\/\*[\s\S]*?\*\//g, "");
  const parts = normalized
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean);

  for (const part of parts) {
    const separatorIndex = part.indexOf(":");
    if (separatorIndex <= 0) {
      continue;
    }

    const property = part.slice(0, separatorIndex).trim();
    const value = part.slice(separatorIndex + 1).trim();
    if (property) {
      declarations[property] = value;
    }
  }

  return declarations;
}
