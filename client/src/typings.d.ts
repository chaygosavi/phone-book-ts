type TCategory = {
  _id: string;
  category: string;
  contacts: TContact[];
};

type TContact = {
  _id: string;
  name: string;
  description: string;
  number: string;
};
