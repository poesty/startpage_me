let config = {
  terminal: {
    title: `Terminal at bleasky.cf`,
    user: 'poesty',
    hostname: 'bleasky.cf',
    welcome: 'Welcome to <d color="#00f501">iam.bleasky.cf</d> terminal',
    actions: [],
  },
  friends: [
    {
      name: '1',
      description: '1',
      url: '1',
    },
    {
      name: '2',
      description: '2',
      url: '2',
    },
  ],
  neofetch: [
    {
      name: 'describe',
      value: '啥都不会的屑',
    },
    {
      name: 'UseOS',
      value: 'Arch Linux x86_64',
    },
    {
      name: 'Blog',
      value: '<d href="https://blog.bleasky.cf/">blog.bleasky.cf</d>',
    },
    {
      name: 'Telegram',
      value: '<d href="https://t.me/bleasky">@bleasky</d>',
    },
    {
      name: 'Github',
      value: '<d href="https://github.com/poesty">@poesty</d>',
    },
    {
      name: 'email',
      value: '<d href="mailto:poi@outlook.lv">poi@outlook.lv</d>',
    },
    {
      name: 'GPG',
      value:
        '<d href="https://keybase.io/poesty/pgp_keys.asc">https://keybase.io/poesty/pgp_keys.asc</d>',
    },
    {
      name: 'Shell',
      value: '<d del>nonsh 114.514</d>',
    },
  ],
  ga: {
    enabled: true,
    id: 'G-PVVC00CJ26',
  },
  pwa: {
    enabled: true,
    sw_enabled: true,
  },
};
config.terminal.prefix = `<d color="#00f501">${config.terminal.user}@${config.terminal.hostname}</d><d color="white">:</d><d color="blue">~</d><d color="white">$</d> `;
config.friends = ((a) => {
  let b = '';
  b += `<d color="#ceedf2">My friend</d>\n`;
  for (let i in a) {
    b += `        <d color="#00cdcd">name</d>:<d color="#7f7f7f">${a[i].name}</d>\n`;
    b += `        <d color="#00cdcd">description</d>:<d color="#7f7f7f">${a[i].description}</d>\n`;
    b += `        <d color="#00cdcd">url</d>:<d color="#7f7f7f" href="${a[i].url}">${a[i].url}</d>\n`;
    b += `        ------\n`;
  }
  return b;
})(config.friends);
config.neofetch = (async (a) => {
  let b = '';
  let c = await fetch('./avatar');
  if (c.status === 200) {
    b += await c.text();
  } else {
    throw 'Server Error';
  }
  b += `<d color="#7f7f7f">${config.terminal.user}@${config.terminal.hostname}</d>\n`;
  b += '--------------------------\n';
  for (let i in a) {
    b += `<d color="#7f7f7f"> ${a[i].name}</d>: ${a[i].value}\n`;
  }
  return b;
})(config.neofetch);
config.ga.enabled = ((a) => {
  if (a === 'G-PVVC00CJ26' && window.location.host == '186526.xyz') {
    return true;
  } else if (window.location.host.search('localhost') != -1) {
    return false;
  } else {
    return config.ga.enabled;
  }
})(config.ga.id);
export { config };
