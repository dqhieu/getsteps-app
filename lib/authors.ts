export interface AuthorProfile {
  id: string;
  name: string;
  role?: string;
  bio?: string;
  avatar?: string;
  url?: string;
  sameAs?: string[];
}

export const AUTHORS: Record<string, AuthorProfile> = {
  hieu: {
    id: "hieu",
    name: "Hieu Dinh",
    role: "Co-founder, Steps",
    bio: "Co-founder of Steps. Walks 10,000 steps a day and runs 10 KM every weekend. Started Steps after trying every step tracker on the App Store and finding none that felt right.",
    url: "https://getsteps.app/about",
  },
  "steps-team": {
    id: "steps-team",
    name: "Steps Team",
    bio: "The Steps team writes about step tracking, walking, running, and getting more out of Apple Watch and iPhone health features.",
    avatar: "/app_icon.png",
    url: "https://getsteps.app/about",
  },
};

export const DEFAULT_AUTHOR_ID = "steps-team";

function asString(v: unknown): string | undefined {
  return typeof v === "string" ? v : undefined;
}

export function resolveAuthor(input: unknown): AuthorProfile {
  if (typeof input === "string") {
    return AUTHORS[input] ?? AUTHORS[DEFAULT_AUTHOR_ID];
  }

  if (input && typeof input === "object") {
    const obj = input as Record<string, unknown>;
    const id = asString(obj.id) ?? asString(obj.slug);
    const base = id && AUTHORS[id] ? AUTHORS[id] : AUTHORS[DEFAULT_AUTHOR_ID];

    const name = asString(obj.name);
    const avatar = asString(obj.avatar);
    const role = asString(obj.role);

    return {
      ...base,
      ...(name ? { name } : {}),
      ...(avatar ? { avatar } : {}),
      ...(role ? { role } : {}),
    };
  }

  return AUTHORS[DEFAULT_AUTHOR_ID];
}
