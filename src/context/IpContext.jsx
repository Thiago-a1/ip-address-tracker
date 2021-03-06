import { createContext, useState } from "react";
import isIp from 'is-ip';

import api from '../services/api';

export const IpContext = createContext();

export const IpProvider = ({children}) => {
	const [data, setData] = useState(
	{
    "ip": "8.8.8.8",
    "location": {
        "country": "US",
        "region": "California",
        "city": "Mountain View",
        "lat": 37.40599,
        "lng": -122.078514,
        "postalCode": "94043",
        "timezone": "-07:00",
        "geonameId": 5375481
    },
    "domains": [
        "0d2.net",
        "003725.com",
        "0f6.b0094c.cn",
        "007515.com",
        "0guhi.jocose.cn"
    ],
    "as": {
        "asn": 15169,
        "name": "Google LLC",
        "route": "8.8.8.0/24",
        "domain": "https://about.google/intl/en/",
        "type": "Content"
    },
    "isp": "Google LLC",
    "proxy": {
        "proxy": false,
        "vpn": false,
        "tor": false
    },
});

	async function getData (value) {
        if (isIp(value)) {
            try {
			const response = await api.get(
                `v1?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${value}`
            );

            const { data } = response;

			setData(data);

            } catch (err) {
			alert('invalid Ip')
		}
        } else if (!isIp(value)) {
            try {
			const response = await api.get(`v1?apiKey=${process.env.REACT_APP_API_KEY}&domain=${value}`);

            const { data } = response;

			setData(data);
            } catch (err) {
			alert(`invalid domain`)
            }
	    }
    }

	return (
		<IpContext.Provider value={{ data, getData }}>
			{children}
		</IpContext.Provider>
	)
}