import { ContactsCollection } from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const createContact = async (payload) => {
  return await ContactsCollection.create(payload);
};

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  userId,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsCollection.find({ userId });
  const contactsCount = await ContactsCollection.countDocuments({ userId });

  const contacts = await contactsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactById = async (contactId, userId) => {
  return await ContactsCollection.findOne({ _id: contactId, userId });
};

export const deleteContact = async (contactId, userId) => {
  return await ContactsCollection.findOneAndDelete({ _id: contactId, userId });
};

export const updateContact = async (
  contactId,
  userId,
  payload,
  options = {},
) => {
  return await ContactsCollection.findOneAndUpdate(
    { _id: contactId, userId },
    payload,
    { new: true, ...options },
  );
};

// export const getAllContacts = async ({
//   page = 1,
//   perPage = 10,
//   sortOrder = SORT_ORDER.ASC,
//   sortBy = '_id',
//   userId,
// }) => {
//   const limit = perPage;
//   const skip = (page - 1) * perPage;

//   const contactsQuery = ContactsCollection.find({ userId });

//   const contactsCount = await ContactsCollection.find({ userId })
//     .merge(contactsQuery)
//     .countDocuments();

//   const contacts = await contactsQuery
//     .skip(skip)
//     .limit(limit)
//     .sort({ [sortBy]: sortOrder })
//     .exec();

//   const paginationData = calculatePaginationData(contactsCount, perPage, page);

//   return {
//     data: contacts,
//     ...paginationData,
//   };
// };

// export const getContactById = async (contactId, userId) => {
//   return await ContactsCollection.findOne({ _id: contactId, userId });
// };

// export const createContact = async (payload, userId) => {
//   return await ContactsCollection.create({ ...payload, userId });
// };

// export const deleteContact = async (contactId, userId) => {
//   return await ContactsCollection.findOneAndDelete({
//     _id: contactId,
//     userId,
//   });
// };

// export const updateContact = async (
//   contactId,
//   userId,
//   payload,
//   options = {},
// ) => {
//   const rawResult = await ContactsCollection.findOneAndUpdate(
//     { _id: contactId, userId },
//     payload,
//     {
//       new: true,
//       includeResultMetadata: true,
//       ...options,
//     },
//   );

//   if (!rawResult || !rawResult.value) return null;

//   return {
//     contact: rawResult.value,
//     isNew: Boolean(rawResult?.lastErrorObject?.upserted),
//   };
// };
