import React, { useState } from "react";
import { TextInput, StyleSheet, View, Button, Text } from "react-native";
import ContactsList from "./ContactList";

const SearchContact = ({ contacts }) => {
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState(contacts)

  const handleSearch = () => {
    const results = contacts.filter((contact) => {
      const nameMatch = contact.name.toLowerCase().includes(search.toLowerCase())
      const phoneMatch = contact.phone.includes(search)
      return nameMatch || phoneMatch
    });
    setSearchResults(results);
  };

  return (
    <View>
      <TextInput
        value={search}
        style={styles.input}
        onChangeText={(value) => setSearch(value)}
      />
      <Button title="Search" onPress={handleSearch} />
      {searchResults.length > 0 ? (
        <ContactsList contacts={searchResults} />
      ) : (
        <Text>Contact not found</Text>
      )}
    </View>
  );
};

export default SearchContact;

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 70,
    marginRight: 70,
  },
});
