type TCategory = {
  _id: string;
  category: string;
  contact: TContact[];
};

type TContact = {
  _id: string;
  name: string;
  description: string;
  phone: string;
};
