class Reward {
  constructor(type, chance, duration, amount) {
    this.type = type;
    this.chance = chance;
    this.duration = duration;
    this.amount = amount;
  }
}

const rewardOptions = [
  new Reward("premium", 1, 86400000, 0),
  new Reward("limit", 1, 0, 5),
  new Reward("exp", 98, 0, Math.floor(Math.random() * 20)),
];

const cumulativeChances = rewardOptions.reduce((acc, curr, index) => {
  acc.push(acc[acc.length - 1] + (index > 0 ? rewardOptions[index - 1].chance : 0));
  return acc;
}, [0]);

const binarySearch = (randomIndex, cumulativeChances) => {
  let left = 0;
  let right = cumulativeChances.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (randomIndex === cumulativeChances[mid]) {
      return mid;
    }

    if (randomIndex < cumulativeChances[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const handler = async (m, { conn, __NOSnakeCase__: { db }, Date }) => {
  try {
    const user = db.data.users[m.sender];
    console.log(
      "Time elapsed since the last claim: ",
      Date.now() - user.terakhirklem
    ); // DEBUG

    const now = Date.now();
    const cooldown = 43200000; // 12 hours in milliseconds

    const gachaChance = Math.random() * 1000;
    user.terakhirklem = now;

    const claimRewards = () => {
      const randomIndex = binarySearch(gachaChance, cumulativeChances);
      const reward = rewardOptions[randomIndex];

      user[reward.type] =
        reward.type === "premium"
          ? {
              value: true,
              date: now + reward.duration,
            }
          : reward.type === "limit"
          ? {
              value: user.limit + reward.amount,
            }
          : {
              value: user.exp + reward.amount,
            };

      user.terakhirklem = new Date().getTime();
      return conn.reply(m.chat, `Kamu Mendapatkan ${reward.amount} ${reward.type}!`, m);
    };

    if (now - user.terakhirklem > cooldown) {
      claimRewards();
    } else {
      conn.reply(m.chat, `Kamu Telah Klaim hari ini.`, m);
    }
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, `Sedang Maintenance/Error.`, m);
  }
};

handler.help = ["claim"];
handler.tags = ["main"];
handler.command = /^(claim)$/i;

handler.onlyprem = true;
handler.fail = null;

module.exports = handler;￼Enter
