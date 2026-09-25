import { Fragment, type ReactNode } from "react";

/**
 * Like `interpolate`, but placeholders can be React nodes, so a translated
 * sentence can wrap a value in markup: `rich(t.above, { amount: <b>5 kg</b> })`.
 */
export function rich(template: string, values: Record<string, ReactNode>): ReactNode {
  return template.split(/(\{\w+\})/).map((part, index) => {
    const key = part.match(/^\{(\w+)\}$/)?.[1];
    return (
      <Fragment key={index}>{key && key in values ? values[key] : part}</Fragment>
    );
  });
}
