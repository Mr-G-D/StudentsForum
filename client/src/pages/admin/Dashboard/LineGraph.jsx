import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    date:
      new Date(1640736000000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1640736000000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3565805.578521333,
  },
  {
    date:
      new Date(1640822400000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1640822400000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3468052.774315439,
  },
  {
    date:
      new Date(1640908800000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1640908800000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3512558.6733543687,
  },
  {
    date:
      new Date(1640995200000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1640995200000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3451557.436459874,
  },
  {
    date:
      new Date(1641081600000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1641081600000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3563065.2349391347,
  },
  {
    date:
      new Date(1641168000000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1641168000000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3530846.7677096925,
  },
  {
    date:
      new Date(1641254400000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1641254400000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3462044.6545362757,
  },
  {
    date:
      new Date(1641340800000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1641340800000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3423997.989176813,
  },
  {
    date:
      new Date(1641427200000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1641427200000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3248673.032940049,
  },
  {
    date:
      new Date(1641513600000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1641513600000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3216149.925928499,
  },
  {
    date:
      new Date(1641600000000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1641600000000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3082597.058233162,
  },
  {
    date:
      new Date(1641686400000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1641686400000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3099812.091119874,
  },
  {
    date:
      new Date(1641772800000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1641772800000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3108525.3235834874,
  },
  {
    date:
      new Date(1641859200000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1641859200000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3100737.3106434103,
  },
  {
    date:
      new Date(1641945600000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1641945600000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3157683.1614839714,
  },
  {
    date:
      new Date(1642032000000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1642032000000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3245833.9585251897,
  },
  {
    date:
      new Date(1642118400000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1642118400000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3151853.1235051733,
  },
  {
    date:
      new Date(1642204800000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1642204800000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3197680.8673373153,
  },
  {
    date:
      new Date(1642291200000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1642291200000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3205526.284070544,
  },
  {
    date:
      new Date(1642377600000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1642377600000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3202973.7342165196,
  },
  {
    date:
      new Date(1642397643000 * 1000)
        .toLocaleString("en-US", {
          month: "long",
        })
        .substring(0, 3) +
      " " +
      new Date(1642397643000 * 1000).toLocaleString("en-US", {
        day: "numeric",
      }),
    price: 3162383.100531721,
  },
];

const LineGraph = () => {
  return (
    <div>
      <LineChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default LineGraph;
