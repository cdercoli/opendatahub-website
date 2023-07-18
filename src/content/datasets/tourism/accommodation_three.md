

---
position: "Datasets"

title: "Accommodations Availability"
img: "/img/datasets/dataset-accommodation-3.jpg"

availability: "closed"
weight: 3
availability_label: "On Request Data"
availability_description: >-
    Data only available to authorized collaborators
    (<a id="dataset-mailto">contact&nbsp;us</a>
    if you are interested in this data)


doc_link: "https://opendatahub.readthedocs.io/en/latest/datasets.html#accommodation-dataset"
example_link: "https://databrowser.opendatahub.com/ExternalDataSources/AccommodationSimpleList"

datatype: "Tourism"
---

The Accommodation Endpoint offers the possibility to make an Availability Request.
It can be done through HGV MSS (Booking Suedtirol Endpoint) or LTS. The Availability Request returns offers with room pricing. Availability requests on both sources are closed data.

|                |                                                                                                    |
| :------------- | -------------------------------------------------------------------------------------------------- |
| Output         | JSON, mime-type application/json, XML AlpineBits                                                   |
| API version    | v1, AlpineBits HotelData 2017-10, 2018-10 (soon 2020-10)                                           |
| Swagger URL    | {{< target-blank-link
                        url="https://tourism.opendatahub.com/swagger/index.html#/Accommodation/post_v1_AccommodationAvailable"
                        text="https://tourism.opendatahub.com/swagger/index.html#/Accommodation/post_v1_AccommodationAvailable" >}} |
| AlpineBits URL | {{< target-blank-link
                        url="https://alpinebits.opendatahub.com/AlpineBits"
                        text="https://alpinebits.opendatahub.com/AlpineBits" >}}                                                   |
| Sources        | Availability Requests provided by HGV/LTS                                   |
| OpenData       | Availability data is closed data  |
